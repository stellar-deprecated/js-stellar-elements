# Stellar Elements

A small design system for Stellar.org user interfaces.

You can view and play with the components on
[Storybook](https://stellar-elements.netlify.com).

# Contributing

## Developing

Run `yarn storybook` to run the Storybook watcher locally.

## Merging in changes

Make a pull request if you want to contribute changes to the library. Make sure
all tests pass! An @stellar employee will merge your PR into master if all looks
okay.

## Releasing

Before releasing, make a pull request changing the version number in
package.json to the version you're planning to release.

Once the library is ready for release, make a new
[release tag](https://github.com/stellar/js-stellar-elements/releases). CircleCI
will automatically publish changes to NPM when it sees new releases starting
with `v`.
