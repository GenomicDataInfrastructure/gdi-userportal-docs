---
title: User Guide
weight: 2
---

<!--
SPDX-FileCopyrightText: 2024 PNED G.I.E.

SPDX-License-Identifier: CC-BY-4.0
-->

The Genomic Data Infrastructure (GDI) Portal is your gateway to an extensive network of genomic datasets designed to advance research, policymaking, and healthcare across Europe. As part of the GDI initiative, the portal facilitates seamless access to over one million genome sequences, supporting breakthroughs in personalized medicine, diagnostics, and treatment strategies for various diseases, including cancer and rare conditions.

By integrating genomic, phenotypic, and clinical data, the GDI Portal enables researchers, scientists, and healthcare professionals to perform precise analyses, contributing to innovation in healthcare and scientific discovery. The platform offers powerful search and metadata filtering capabilities, allowing users to efficiently locate and request datasets relevant to their studies.

The portal ensures compliance with stringent data governance policies, safeguarding data privacy while promoting responsible data sharing. Whether you are a researcher looking for curated genomic datasets or a policymaker aiming to leverage data for informed decision-making, the GDI Portal provides a user-friendly interface to streamline dataset discovery and access management.

Explore the GDI Portal and become part of a collaborative effort to enhance healthcare outcomes and foster genomic research innovation. For more details about the broader GDI project, visit the official GDI website.

## 1 Getting Started

### 1.1 Accessing the Portal

The GDI Portal is accessible to all users without the need to log in, allowing you to explore datasets and search for relevant genomic data freely.

However, to request access to a dataset, logging in is required.

### 1.2 Logging In

To log in or register for access, follow these steps:

1. Navigate to the **GDI Portal Homepage**.
2. Click on **Login** in the top-right corner.
3. Click on **Sign in with LSAAI**.
4. Follow instructions and fill necceserry info.

## 2 Dataset Discovery

The **Dataset Discovery** feature on the GDI Portal helps you quickly find genomic datasets tailored to your research needs. Here's how you can discover datasets using the portal's search functionality.

### 2.1 Using the Search Bar

On the **GDI Portal Homepage**, you will find a prominent search bar. This is the starting point for searching datasets. You can enter any relevant search term, such as:

- Disease names (e.g., "cancer", "diabetes")
- Genomic data types (e.g., "genome sequence", "exome data")
- Specific research terms (e.g., "BRCA1", "pharmacogenomics")
- Keywords related to your research interest

Once you enter a search term and hit **Enter**, you will be navigated to the **Search Results Page**, where you can refine your results further.

### 2.2 Filtering Search Results

On the **Search Results Page**, you will see a list of datasets matching your search term. To narrow down your results, you can use the filters located on the left-hand side of the page. These filters allow you to refine your search based on different criteria, including:

- **Access Rights**: Filter datasets by their accessibility (e.g., "Open Access", "Restricted", or "Under Review").
- **Themes**: Select specific research themes or areas of interest related to the datasets (e.g., "Cancer", "Rare Diseases", "Genomics").
- **Keywords**: Use specific keywords related to your field of research (e.g., "BRCA", "RNA-seq", "genetic variation").
- **Publishers**: Filter datasets by the publisher or data provider (e.g., "GDI Initiative", "National Cancer Institute").
- **File Formats**: Choose the file formats that best suit your research tools or analysis needs (e.g., "FASTQ", "VCF", "CSV").

As you select different filter options, the results will update automatically to reflect your selections. This allows you to drill down to exactly the data you need for your research.

If you are **logged in**, you will have access to additional filters that can further refine your search, providing more precise dataset discovery options. Additionally, some datasets are only available to authenticated users, meaning logging in may reveal more datasets that were previously hidden when browsing anonymously.

### 2.3 Viewing Dataset Details

Once you've found a dataset of interest, click on the dataset's title to view detailed information. This page will typically include:

- **Dataset Overview**: A summary of the dataset, including its contents, origin, and any important metadata.
- **Distributions**: List of all distributions with details.
- **Metadata**: You can export metadata in available formats.
- **Request Access**: You will find **Add to basket** button.

### 2.4 Allele Frequency

Another powerful feature of the GDI Portal is the **Allele Frequency Query**. This tool allows you to search for specific genomic variants and find datasets where those variants are present.

To use this feature:

1. Navigate to the **Allele Frequency Query Page**.
2. Specify the **Reference Genome** you are interested in. Available options include:
   - **GRCh37** (Genome Reference Consortium Human Build 37)
3. Enter the genomic variant details:

   - **Start Position**: Specify the start position of the genomic variant (e.g., `45864731`).
   - **End Position**: Specify the end position of the variant (e.g., `45864731`).
   - **Reference Name**: Enter the chromosome number (e.g., `3` for chromosome 3).
   - **Reference Base**: Enter the reference base (e.g., `T` for Thymine).
   - **Alternate Base**: Enter the alternate base (e.g., `C` for Cytosine).
   - **Cohort**: Specify the cohort or population group (e.g., European, Asian).

4. Click **Search**.

The results will show datasets that contain the specified allele or variant, along with relevant information about the datasets such as the sample size, associated phenotype, and data access restrictions.

This feature is particularly useful when you need to explore datasets based on the presence of specific genomic variants across multiple populations or research themes.

#### Querying the Beacon Network (For Logged-in Users)

If you are **logged in**, you will also have access to the **Beacon Network**, which allows you to query external genomic datasets beyond the GDI Portal. This federated search enables users to check the presence of specific genetic variants across multiple international genomic databases.

By leveraging the **Beacon Network**, researchers can identify additional datasets that contain the variants of interest, even if those datasets are not directly hosted within the GDI Portal.

## 3. Request Access

The **Request Access** functionality in the GDI Portal allows users to formally request permission to access genomic datasets that are restricted for a variety of reasons, including privacy concerns and regulatory restrictions. Many datasets in the portal require prior approval before access is granted. This section will guide you through the process of requesting access, managing your applications, and monitoring their status.

### 3.1 Adding Datasets to the Basket

Once you've identified datasets that are relevant to your research or project, you can add them to your **Basket**. The Basket acts as a holding area where you can gather and organize datasets before proceeding with the access request process. This feature is particularly helpful if you're considering multiple datasets and would like to submit a single application for all of them, saving you time and effort.

You can add any number of datasets to the Basket, and once you're ready, you can proceed with creating your application to request access to these datasets.

### 3.2 Creating an Application

To begin the process of requesting access to datasets, follow these steps:

1. **Log in to your GDI Portal account.** Only logged-in users can submit applications.
2. **Navigate to your Basket** where the datasets you have added are stored.
3. Click on the **Create Application** button to start a new access request.
4. Choose the datasets from your Basket that you want to include in the application.
5. Your application will be saved in **Draft** status, which allows you to review and modify it before submission.

Once your application is ready, you can submit it for review. But before submission, ensure that all required fields are filled out and that the relevant documentation is attached.

### 3.3 Application Statuses

Applications undergo several stages as they move through the approval process. The following are the key application statuses:

- **Draft**: Your application is being prepared and can be modified. This is the initial status where you can add information, attach documents, and edit the application.
- **Submitted**: The application has been sent for review and cannot be edited further. This marks the official submission of your request to the dataset provider.
- **Approved**: The application has been approved, granting you access to the requested datasets. You will be notified, and you can begin retrieving the data.
- **Rejected**: The application has been declined, and feedback may be provided regarding the reasons for the rejection. You can use this feedback to improve future applications.

Each application status is updated in real-time on your **Applications Page**, so you can always keep track of where your request stands.

### 3.4 Completing the Application Form

Once your application is in **Draft** status, you will need to fill out all necessary details before submitting it. While the required information can vary depending on the dataset provider, typical requirements include:

- **Additional Documentation**: Some datasets may require supplementary documents, such as ethics approval or data access agreements. These are typically requested for sensitive datasets that involve human or clinical data.
- **Acceptance of Terms**: You must agree to the terms and conditions set by the dataset provider. This is often a legal agreement ensuring responsible use of the data, including adherence to privacy regulations and ethical standards.

Remember, specific instructions and required fields will be presented on the application details page, so be sure to follow them closely to ensure your application is complete.

### 3.5 Collaborating on an Application

The GDI Portal provides the ability to collaborate with other users on an application. Once you've created your application, you can invite others to join and contribute by adding them as participants. To do so, simply click on the **Add Participant** button on the application details page.

Collaborators can view the application, provide input, and help complete any missing details. This is especially useful for research teams or projects that involve multiple contributors. All participants added to the application will have access to the same details, ensuring everyone involved is on the same page. The collaboration feature makes the request process more efficient and transparent, allowing for better teamwork on dataset access requests.

### 3.6 Tracking and Managing Applications

After creating and submitting your application, you can track its progress from the **Applications Page**. This centralized location lets you:

- View all active and past applications in one place.
- Check the current status of each application to see if it's in **Draft**, **Submitted**, **Approved**, or **Rejected**.
- Receive notifications if additional documentation is required or if your application needs further attention.
- Access datasets directly from the portal once your application has been approved.
