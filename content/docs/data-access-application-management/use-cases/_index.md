---
title: Use Cases
---

<!--
SPDX-FileCopyrightText: 2024 PNED G.I.E.

SPDX-License-Identifier: CC-BY-4.0
-->

Below you will find all use cases (domain message flows) regarding Data Access Application Management, to be implemented by User Portal.

## Meaning of shapes
```mermaid
flowchart TB
    actor(("`
        Actor
    `"))
    
    interface("`
        interface
    `")
    
    bounded_context{{"`
        bounded context (domain)
    `"}}
    style bounded_context fill:#999be2

    command[/"`
        Command
    `"/]
    style command fill:#1C8092

    query[/"`
        Query
    `"/]
    style query fill:#8BB939

    domain_event[/"`
        Domain Event
    `"/]
    style domain_event fill:#FF983D

    note>"`
        *Note*
    `"]
    style note fill:#8e8e8e
```

## Add dataset to basket

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    website("`
        Website
    `")
    
    daam{{"`
        Data Access Application Management
    `"}}
    dataset_metadata_repository{{"`
        Dataset Metadata Repository
    `"}}
    style daam fill:#999be2
    style dataset_metadata_repository fill:#999be2

    add_dataset_1[/"`
        1 - Add Dataset to basket
    `"/]
    add_dataset_2[/"`
        2 - Add Dataset to basket
    `"/]
    group_dataset_by_authority_workflow[/"`
        5 - Group Datasets by authority workflow
    `"/]
    style add_dataset_1 fill:#1C8092
    style add_dataset_2 fill:#1C8092
    style group_dataset_by_authority_workflow fill:#1C8092

    retrieve_access_request_metadata[/"`
        3 - Retrieve Access Request Metadata
    `"/]
    style retrieve_access_request_metadata fill:#8BB939

    access_request_metadata_retrieved[/"`
        4 - Access request metadata retrieved
    `"/]
    dataset_added[/"`
        6 - Dataset added to basket
    `"/]
    style dataset_added fill:#FF983D
    style access_request_metadata_retrieved fill:#FF983D

    daam -.- dataset_added
    dataset_added -.-> website
    user -.- add_dataset_1
    add_dataset_1 -.-> website
    website -.- add_dataset_2
    add_dataset_2 -.-> daam
    daam -.- retrieve_access_request_metadata
    retrieve_access_request_metadata -.-> dataset_metadata_repository
    dataset_metadata_repository -.- access_request_metadata_retrieved
    access_request_metadata_retrieved -.-> daam
    daam -.- group_dataset_by_authority_workflow
    group_dataset_by_authority_workflow -.-> daam
```

## Remove dataset from basket

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    website("`
        Website
    `")
    
    daam{{"`
        Data Access Application Management
    `"}}
    style daam fill:#999be2

    add_dataset_1[/"`
        1 - Remove Dataset from basket
    `"/]
    add_dataset_2[/"`
        2 - Remove Dataset from basket
    `"/]
    style add_dataset_1 fill:#1C8092
    style add_dataset_2 fill:#1C8092

    dataset_added[/"`
        3 - Dataset removed from basket
    `"/]
    style dataset_added fill:#FF983D

    user -.- add_dataset_1
    add_dataset_1 -.-> website
    website -.- add_dataset_2
    add_dataset_2 -.-> daam
    daam -.- dataset_added
    dataset_added -.-> website
```

## Retrieve basket

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    website("`
        Website
    `")

    daam{{"`
        Data Access Application Management
    `"}}
    style daam fill:#999be2

    retrieve_basket_1[/"`
        1 - Retrieve dataset basket
    `"/]
    retrieve_basket_2[/"`
        2 - Retrieve dataset basket
    `"/]
    style retrieve_basket_1 fill:#8BB939
    style retrieve_basket_2 fill:#8BB939

    basket_retrieved[/"`
        3 - Basket retrieved
    `"/]
    style basket_retrieved fill:#FF983D

    user -.- retrieve_basket_1
    retrieve_basket_1 -.-> website
    website -.- retrieve_basket_2
    retrieve_basket_2 -.-> daam
    daam -.- basket_retrieved
    basket_retrieved -.-> website
```

## Create application from basket

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    website("`
        Website
    `")
    website("`
        Website
    `")
    
    daam{{"`
        Data Access Application Management
    `"}}
    style daam fill:#999be2
    
    create_application_1[/"`
        1 - Create application from basket of authority workflow
    `"/]
    create_application_2[/"`
        2 - Create application from basket of authority workflow
    `"/]
    style create_application_1 fill:#1C8092
    style create_application_2 fill:#1C8092

    application_created[/"`
        3 - Application created
    `"/]
    style application_created fill:#FF983D

    application_created_note>"`
        *The status is DRAFT*
    `"]
    style application_created_note fill:#8e8e8e

    user -.- create_application_1
    create_application_1 -.-> website
    website -.- create_application_2
    create_application_2 -.-> daam
    daam -.- application_created
    application_created_note -.- application_created
    application_created -.-> website
```

## Retrieve application

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    website("`
        Website
    `")
    
    daam{{"`
        Data Access Application Management
    `"}}
    style daam fill:#999be2
    
    retrieve_application_1[/"`
        1 - Retrieve application
    `"/]
    retrieve_application_2[/"`
        2 - Retrieve application
    `"/]
    style retrieve_application_1 fill:#8BB939
    style retrieve_application_2 fill:#8BB939
    
    application_retrieved[/"`
        3 - Application retrieved
    `"/]
    style application_retrieved fill:#FF983D

    user -.- retrieve_application_1
    retrieve_application_1 -.-> website
    website -.- retrieve_application_2
    retrieve_application_2 -.-> daam
    daam -.- application_retrieved
    application_retrieved -.-> website
```

## Accept terms of application

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    website("`
        Website
    `")
    
    daam{{"`
        Data Access Application Management
    `"}}
    style daam fill:#999be2
    
    accept_terms_1[/"`
        1 - Accept terms of application
    `"/]
    accept_terms_2[/"`
        2 - Accept terms of application
    `"/]
    style accept_terms_1 fill:#1C8092
    style accept_terms_2 fill:#1C8092

    terms_accepted[/"`
        3 - Terms of application accepted
    `"/]
    style terms_accepted fill:#FF983D

    user -.- accept_terms_1
    accept_terms_1 -.-> website
    website -.- accept_terms_2
    accept_terms_2 -.-> daam
    daam -.- terms_accepted
    terms_accepted -.-> website
```

## Attach file to application

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    website("`
        Website
    `")
    
    daam{{"`
        Data Access Application Management
    `"}}
    style daam fill:#999be2
    
    attach_file_1[/"`
        1 - Attach file to/remove attachment from application
    `"/]
    attach_file_2[/"`
        2 - Attach file to/remove attachment from application
    `"/]
    save_form_changes[/"`
        4 - Save form of application
    `"/]
    style attach_file_1 fill:#1C8092
    style attach_file_2 fill:#1C8092
    style save_form_changes fill:#1C8092
    
    save_form_changes_note>"`
        *Submit form changes of the attachement field only*
    `"]
    style save_form_changes_note fill:#8e8e8e

    file_attached[/"`
        3 - File attached to application
    `"/]
    form_saved[/"`
        5 - Form of application saved
    `"/]
    style file_attached fill:#FF983D
    style form_saved fill:#FF983D

    file_attached -.-> website
    website -.- save_form_changes
    save_form_changes_note -.- save_form_changes
    save_form_changes -.-> daam
    daam -.- form_saved
    form_saved -.-> website
    user -.- attach_file_1
    attach_file_1 -.-> website
    website -.- attach_file_2
    attach_file_2 -.-> daam
    daam -.- file_attached
```

## Add/remove applicant

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    website("`
        Website
    `")
    
    daam{{"`
        Data Access Application Management
    `"}}
    style daam fill:#999be2
    
    add_applicant_1[/"`
        1 - Add/remove applicant to/from application
    `"/]
    add_applicant_2[/"`
        2 - Add/remove applicant to/from application
    `"/]
    style add_applicant_1 fill:#1C8092
    style add_applicant_2 fill:#1C8092

    applicant_added[/"`
        3 - Applicant added to/removed from application
    `"/]
    style applicant_added fill:#FF983D

    user -.- add_applicant_1
    add_applicant_1 -.-> website
    website -.- add_applicant_2
    add_applicant_2 -.-> daam
    daam -.- applicant_added
    applicant_added -.-> website
```

## Add/remove dataset

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    website("`
        Website
    `")
    
    daam{{"`
        Data Access Application Management
    `"}}
    style daam fill:#999be2
    
    add_dataset_1[/"`
        1 - Add/remove dataset to/from application
    `"/]
    add_dataset_2[/"`
        2 - Add/remove dataset to/from application
    `"/]
    style add_dataset_1 fill:#1C8092
    style add_dataset_2 fill:#1C8092

    dataset_added[/"`
        3 - Dataset added to/removed from application
    `"/]
    style dataset_added fill:#FF983D

    user -.- add_dataset_1
    add_dataset_1 -.-> website
    website -.- add_dataset_2
    add_dataset_2 -.-> daam
    daam -.- dataset_added
    dataset_added -.-> website
```

## Add/remove DUO

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    website("`
        Website
    `")
    
    daam{{"`
        Data Access Application Management
    `"}}
    style daam fill:#999be2
    
    add_duo_1[/"`
        1 - Add/remove DUO to/from application
    `"/]
    add_duo_2[/"`
        2 - Add/remove DUO to/from application
    `"/]
    style add_duo_1 fill:#1C8092
    style add_duo_2 fill:#1C8092

    duo_added[/"`
        3 - DUO added to/removed from application
    `"/]
    style duo_added fill:#FF983D

    user -.- add_duo_1
    add_duo_1 -.-> website
    website -.- add_duo_2
    add_duo_2 -.-> daam
    daam -.- duo_added
    duo_added -.-> website
```

## Save form

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    website("`
        Website
    `")
    
    daam{{"`
        Data Access Application Management
    `"}}
    style daam fill:#999be2
    
    save_form_changes_1[/"`
        1 - Save form of application
    `"/]
    save_form_changes_2[/"`
        2 - Save form of application
    `"/]
    style save_form_changes_1 fill:#1C8092
    style save_form_changes_2 fill:#1C8092

    save_form_changes_note>"`
        *One application can have multiple forms*
    `"]
    style save_form_changes_note fill:#8e8e8e

    form_saved[/"`
        3 - Form of application saved
    `"/]
    style form_saved fill:#FF983D

    user -.- save_form_changes_1
    save_form_changes_note -.- save_form_changes_1
    save_form_changes_1 -.-> website
    website -.- save_form_changes_2
    save_form_changes_2 -.-> daam
    daam -.- form_saved
    form_saved -.-> website
```

## Submit application

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    website("`
        Website
    `")
    
    daam{{"`
        Data Access Application Management
    `"}}
    style daam fill:#999be2
    
    submit_application_1[/"`
        1 - Submit application
    `"/]
    submit_application_2[/"`
        2 - Submit application
    `"/]
    style submit_application_1 fill:#1C8092
    style submit_application_2 fill:#1C8092

    submit_application_note>"`
        *Only DRAFT/RETURNED application can be submitted*
    `"]
    style submit_application_note fill:#8e8e8e

    application_submitted[/"`
        3 - Application submitted
    `"/]
    style application_submitted fill:#FF983D

    user -.- submit_application_1
    submit_application_note -.- submit_application_1
    submit_application_1 -.-> website
    website -.- submit_application_2
    submit_application_2 -.-> daam
    daam -.- application_submitted
    application_submitted -.-> website
```

## Notify user

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    email("`
        Email Server
    `")

    dac(("`
        Data
        Access
        Committee
    `"))
    
    website("`
        Website
    `")
    
    daam{{"`
        Data Access Application Management
    `"}}
    style daam fill:#999be2
    
    approve_application_1[/"`
        1 - Approve/reject/change application
    `"/]
    
    approve_application_2[/"`
        2 - Approve/reject/change application
    `"/]
    style approve_application_1 fill:#1C8092
    style approve_application_2 fill:#1C8092

    application_approved[/"`
        3 - Application approved/rejected/changed
    `"/]
    style application_approved fill:#FF983D

    notify_user[/"`
        4 - Notify user of changes on application
    `"/]
    style notify_user fill:#1C8092

    dac -.- approve_application_1
    approve_application_1 -.-> website
    website -.- approve_application_2
    approve_application_2 -.-> daam
    daam -.- application_approved
    application_approved -.-> website
    daam -.- notify_user
    notify_user -.-> email
    email -.-> user
```

## Retrieve notifications

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    website("`
        Website
    `")
    
    daam{{"`
        Data Access Application Management
    `"}}
    style daam fill:#999be2
    

    retrieve_notifications_1[/"`
        1 - Retrieve user notifications
    `"/]
    retrieve_notifications_2[/"`
        2 - Retrieve user notifications
    `"/]
    style retrieve_notifications_1 fill:#8BB939
    style retrieve_notifications_2 fill:#8BB939

    notifications_retrieved[/"`
        3 - Notifications of application retrieved
    `"/]
    style notifications_retrieved fill:#FF983D

    user -.- retrieve_notifications_1
    retrieve_notifications_1 -.-> website
    website -.- retrieve_notifications_2
    retrieve_notifications_2 -.-> daam
    daam -.- notifications_retrieved
    notifications_retrieved -.-> website
```

## Copy as new application

```mermaid
flowchart LR
    user(("`
        User
    `"))
    
    website("`
        Website
    `")
    
    daam{{"`
        Data Access Application Management
    `"}}
    style daam fill:#999be2
    
    copy_application_1[/"`
        1 - Copy as new application
    `"/]
    copy_application_2[/"`
        2 - Copy as new application
    `"/]
    style copy_application_1 fill:#1C8092
    style copy_application_2 fill:#1C8092

    application_copied[/"`
        3 - Application copied
    `"/]
    style application_copied fill:#FF983D

    application_copied_note>"`
        *The status is DRAFT. Accept terms is **NOT** copied.*
    `"]
    style application_copied_note fill:#8e8e8e

    user -.- copy_application_1
    copy_application_1 -.-> website
    website -.- copy_application_2
    copy_application_2 -.-> daam
    daam -.- application_copied
    application_copied_note -.- application_copied
    application_copied -.-> website
```
