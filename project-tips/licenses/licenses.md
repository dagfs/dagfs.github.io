# Licenses

This document describes the decisions regarding use of licensed work in this project.

`./check-licenses.sh` shall be run after adding dependencies.

This project uses an allowed list approach to licenses. If the license checker fails, this does not mean you can not use the library added. It means you have to make a decisions wether it should be used or not. Make sure to update check-licenses so it works.

The decisions to the changes to check-licenses should be documented here.

Use https://tldrlegal.com/ to check licenses you are not familiar. Take note of what you can, cannot, and must do. Must disclose source is a big red flag in most cases.

## Changes

| Date       | Who                |  Change                                                                                                    | Reason                                                                                                                                                                                                                                                  |
| ---------- | ------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21.4.2021  | dagfs  |  --onlyAllow 'MIT;ISC;BSD-2-Clause;Apache-2.0;BSD-3-Clause;0BSD;CC0-1.0;WTFPL;CC-BY-3.0;CC0-1.0:CC-BY-4.0' | These licenses prevents us from holding the creator liable, requires us to include copyrights, license, notice and state changes. As this project does not modify these libraries and the licenses are included, these are licenses suited for our use. |
| 21.04.2021 |  dagfs | --exclude 'Test@1.0.0'                                                                                  | This our project, no need for a licence                                                                                                                                                                                                                 |

[check-licenses.sh](check-licenses.sh)