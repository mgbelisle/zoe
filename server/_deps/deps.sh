#!/bin/bash
# Vendors your packages into the deps folder
set -eu

# Change this if we ever reuse this script
PREFIX=github.com/mgbelisle/zoe/server/_deps
cd "$(dirname "$0")"


USAGE="Installs a package and its dependencies into the deps folder

Usage: $0 <package>
"

DEP=$1
[ "$DEP" ] || {
    echo "$USAGE" >&2
    exit 1
}

# Check out the dependencies into a clean gopath
GOPATH=$(mktemp -d /tmp/go.XXXXX)
alias go="$HOME/go_appengine/goapp"
echo go get -d "$DEP"
go get -d "$DEP"
for META in .git .hg .svn .bzr; do
    find "$GOPATH" -type d -name $META -exec rm -rf {} +
done

# Replace all the usages and copy the packages into deps
ALL="$DEP
"$(go list -f '{{join .Deps "\n"}}' "$DEP" | xargs go list -f '{{if not .Standard}}{{.ImportPath}}{{end}}')
for PKG in $ALL; do
    echo find $GOPATH -type f -name '*.go' -exec gsed -i "s@\"$PKG\"@\"$PREFIX/$PKG\"@g" {} +
    find $GOPATH -type f -name '*.go' -exec gsed -i "s@\"$PKG\"@\"$PREFIX/$PKG\"@g" {} +
done
for PKG in $ALL; do
    [ -d "$PKG" ] && rm -r "$PKG"
    mkdir -p $(dirname "$PKG")
    echo cp -R $GOPATH/src/"$PKG" "$PKG"
    cp -R $GOPATH/src/"$PKG" "$PKG"
done
