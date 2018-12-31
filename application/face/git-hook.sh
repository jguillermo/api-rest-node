#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-commit".

echo "pre-commit"

MAKE_ERROR=0
ERROR_LINT=""
ERROR_TEST=""

MAKEPATH="$PWD"
echo $MAKEPATH

cd -- $MAKEPATH
echo $PWD

make lint
if [ $? != 0 ] ; then
   MAKE_ERROR=1
   ERROR_LINT="Lint error"
fi

make test
if [ $? != 0 ] ; then
   MAKE_ERROR=1
   ERROR_TEST="Test error"
fi

if [ $MAKE_ERROR != 0 ] ; then
   echo "------------------ LIST ERROR --------------"
   echo $ERROR_LINT
   echo $ERROR_TEST
   make -s console a="node face/bad_job"
   exit 1
fi
make -s console a="node face/good_job"