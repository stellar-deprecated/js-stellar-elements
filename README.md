# Stellar Elements

A small design system for Stellar.org user interfaces using
[styleguidist](https://react-styleguidist.js.org/).

# Contributing

## Developing

Code examples in Markdown use ES6+JSX syntax. You can use the current component
without explicitly importing it:

````jsx
// ```jsx inside Button/Readme.md or Button.md
<Button>Push Me</Button>
````

To use other components, you need to explicity import them. Reference on
[Writing code examples on styleguidist](https://react-styleguidist.js.org/docs/documenting.html#writing-code-examples)

<!-- prettier-ignore -->
````jsx
// ```jsx inside Panel/Readme.md or Panel.md
import { all } from 'dog-names'
import { RandomButton } from '../RandomButton'
;<RandomButton variants={all} />
````

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
