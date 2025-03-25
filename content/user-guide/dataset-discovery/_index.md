---
title: Dataset Discovery
weight: 2
---

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
