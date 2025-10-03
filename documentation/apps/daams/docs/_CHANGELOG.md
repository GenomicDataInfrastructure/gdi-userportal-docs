# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v4.0.20] - 2025-09-29

### Added
- feat: When dataset is unpublished from UI, upload the rdf to front office (ftps) by @Inderpal Singh in cecc225d5

### Changed
- docs: Update CHANGELOG for v4.0.19 by @ci-push-tag in 71e054150

### Fixed
- fix:#17583 migration of data policy action types by @Emiliana in ded374bce
- fix: seperate document text for non cdsp by @Inderpal Singh in 13ed3d9b3


## [v4.0.19] - 2025-09-26

### Changed
- Art 17583/improve design of policy actions by @Emiliana Pali in d88f660f8bd

### Fixed
- fix: make push_tag_to_library job non-blocking for merges by @Inderpal Singh in 60c09a6b43b


## [v4.0.15] - 2025-09-22

### Added
- feat: backend clean up qualified relations by @alessandro.merola@lnds.lu in fe517ec7328

### Changed
- chore: change flag name by @Inderpal Singh in 020698e8684
- docs: Update CHANGELOG for v4.0.14 by @ci-push-tag in c5cba738ca9

### Fixed
- fix: license field was not highlighted if there is an error by @Inderpal Singh in 5d6eefe6d75
- fix: pyparsing license declaration by @Inderpal Singh in 698745ca282
- fix: add cryptography concluded license by @Inderpal Singh in 282e102e060
- fix: Showing date time in front office list, also upload result should be green by @Inderpal Singh in 1a60e5375ac
- fix: add license for cryptography by @Inderpal Singh in b76d6d77bc5


## [v4.0.14] - 2025-09-17

### Added
- feat: SFTP -> FTPS by @Inderpal Singh in 6eb8447a
- feat: Add dedicated page for first time login unauthorised screen by @Inderpal Singh in 65fa58de

### Changed
- Fix UI message activity log for org deprecation by @Alessandro in ccab92bd
- docs: Update CHANGELOG for v4.0.13 by @ci-push-tag in b11efbc2

### Fixed
- fix; pyparsing license information by @Inderpal Singh in 13abe04b
- fix: During bulk import datasets, the permission to check if datasets can be... by @Inderpal Singh in c2ef4d44


## [v4.0.13] - 2025-09-10

### Added
- feat: Show newer version link on edit relations page by @Inderpal Singh in d283a7efc6
- feat: Deprecate old dataset if newer got published/ prevent publishing dataset that has newer published version by @Inderpal Singh in 98dba75801
- feat: Unpublish dataset (new trigger moves from PUBLISHED -> APPROVED) by @Inderpal Singh in 8c93adf965
- feat: Add activity logs for deprecation/restoration of user by @Inderpal Singh in 9a53d207a7
- feat: Only Catalogue Managers can update keywords that have more than 1 org assigned by @Inderpal Singh in 84235710d5
- feat: When new legal basis with already existing link gets created for another org, another org gets added to the existing basis by @Inderpal Singh in ab24aac444
- feat: remove key capture from ui by @Inderpal Singh in bf67a8b868
- feat: upload authentic source on the SFTP by @alessandro.merola@lnds.lu in 39d0ba5a28
- feat: restore deprecated organisation by @Inderpal Singh in bd61ca6ba1
- feat: Make deprecation UI consistent across all entities, show alert message when SA labels got deprecated/restored by @Inderpal Singh in cf26a2b1d4
- feat: Add tooltip to actionable icons by @Inderpal Singh in 45223e84c0
- feat: Show the link to newer verson on the deprecated dataset card by @Inderpal Singh in ecc3e89e7f

### Fixed
- fix: demo env data seed generation script by @Inderpal Singh in a9466d180a
- fix: Permission should be form-fields:edit and not roles:manage by @Inderpal Singh in 4233426d99
- fix: improve UI redability upon upload by @Alessandro in 127fd2311f
- fix: If duplicate keyword is added for different org, we assign the org to original keyword but activity log was saying we created new keyword by @Inderpal Singh in d90ce79ffe
- fix: fix some syntax errors on the sftp authentic source upload by @alessandro.merola@lnds.lu in 8214b0708f
- fix: make activity logs more informative for form fields like keywords by @Inderpal Singh in 041bb9b536
- fix: cffi license missing by @Inderpal Singh in 3d31089bcb
- fix: bump deepdiff to 8.6.1 and fix failing tests caused by this by @Inderpal Singh in f1686764f9
- fix: jsonschema-specifications ort version update by @Inderpal Singh in 2d204aebc4
- fix: Only return keywords from current organisation (rather than all assigned organisations) by @Inderpal Singh in 1c23142d96
- fix: Correct response type for list of applicable legislations endpoint by @Inderpal Singh in 5cd5b45999
- Merge branch 'fix/overlapping-warnings' into 'main' by @Inderpal Singh in 6d980722b4


## [v4.0.12] - 2025-09-02

### Added
- feat: add logic to restore a deprecated user by @alessandro.merola@lnds.lu in 6b128135108
- feat: Upload data dictionaries to sftp server by @Inderpal Singh in c8c9b938af5
- feat: Add UI to send published datasets to sftp by @Inderpal Singh in 3a8f30fcc8c
- feat: Only published datasets can be uploaded to sftp by users with publish permission by @Inderpal Singh in 9397e34679e
- feat: implement the fetch for applicable legislation by @Alessandro in 5e1aaebc234
- feat: Added route to push dataset rdf/ttl/json to sftp server by @Inderpal Singh in cced6bfe89b
- feat: Pagination in keywords/legal basis list frontend by @Inderpal Singh in 6f6ffaf2e02
- feat: Show info message to Inventory Coordinators about new users without role not appearing in list by @Inderpal Singh in 7017393ac3f
- feat: #17356 activity logs for global promotions by @Emiliana Pali in d2ef7d1d6f5
- feat: Provide sample xls from the official repo of MinDigi by @Inderpal Singh in 297d59482e1
- feat: add the new protection type to dataset form by @Alessandro Merola in 53e74cd5b18
- feat: enhancements user deprecation by @Alessandro in 79575404587
- feat: #17356 allow cm to promote form fields to global by @Emiliana Pali in 4037ab44c58
- feat: user deprecation feature complete by @Alessandro in 27e09ccc33a
- feat: Assign form field to multiple orgs by @Inderpal Singh in 56c1ec88f2c
- feat: Add the deprecation for the user by @Alessandro Merola in 4caa750c1f3
- feat: Backend: Add service and repo method to get keywords/legal_basis via pagination by @Inderpal Singh in 5e33cb303cb

### Changed
- Docs/art 17526/batch4 approval and publish by @Inderpal Singh in 435c16e8e46
- chore: Add curations for paramiko, rpds-py by @Inderpal Singh in 5ac674de497
- Merge branch 'ART-17360/legilux-integration' into 'main' by @Inderpal Singh in cd13e6c3f3e
- Merge branch 'chore/remove-dataset-list0endpoint' into 'main' by @Inderpal Singh in 5d522a28644

### Fixed
- docs-fix-the-footer by @Rose Pasigna in 19d012669e6
- fix: Use dataset identifier in filename instead of timestamp by @Inderpal Singh in 4848be50777
- fix: Add skos preflabel for publisher type by @Inderpal Singh in 2573b584d23
- fix: sqlalchemy.exc.InvalidRequestError: When initializing mapper Mapper[Organisation(organisations)], expression 'keyword_assignments' failed to locate a name ("name 'keyword_assignments' by @Inderpal Singh in aa959a024ef
- fix: use asyncssh instead of paramiko for sftp because of licensing issue by @Inderpal Singh in f58921bc741
- fix legal basis assignment issues by @Emiliana in e4d2060d64e
- fix: Dont use useCallback and fix useEffect dependency array so filters work properly by @Inderpal Singh in c1e2a984353
- fix: Dont show current dataset label, Also status tag is only shown when status is deprecated by @Inderpal Singh in 49cb7157d62
- fix: Authentic source label fixes by @Inderpal Singh in c9534665793


