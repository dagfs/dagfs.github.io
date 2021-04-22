# Licenses

## Things to know
- If you use a tool in your project that has a payed version, you should proabably pay for it
- If you follow the intention of the creator of the licnsed work you are using your are probably ok. Do not try to avoid paying by using loopholes.
- Licenses such as ISC, Apache, CC, MIT and BSD, are liberal and prevents you from suing the creator if something goes wrong, but restricts you as a user very little in other regards.
- If you need a license for your project https://choosealicense.com/ or https://tldrlegal.com/ can help you figure out what you need
- $ What does no license imply?

## Things to do
- Use a licence checker and look trough the licenses of the licensed work your project is based on. 
- Make a list of licenses that you are comfortable using and figure out if there is any licensed work you are not comfortable using. Sites like https://tldrlegal.com/ can help you figure out if you are comfortable using the license. Licenses that forces the user to disclose source code should probably be avoided, unless this is something the project are comfortable doing.
- Add documentation to the work you have done regarding licenses and document your decisions. If it is not documented. It does not  exist.
- Inform your team of the work you have done and how they can contribute 
- Integrate licence checking into your build


## Example

Node:
Install

https://www.npmjs.com/package/license-checker
```
npm install -g license-checker

```

Run `license-checker --summary` to get an overview.

Make a licenses.md that descibes the projects stance on license use.

Make a check-license.sh file with
`license-checker --onlyAllow [<licenses you find well suited for your project>]`

Make it part of your build and add it to your package.json.

If any of the libraries you use voiolates your stance. make a decision and document it. `--excludePackages` can be used for specific packages

### Example files:
- [licenses.md](licenses.md)
- [check-licenses.sh](check-licenses.sh)