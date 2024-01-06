# Recipe Recorder

The Recipe Recorder allows users to record recipe onto their accounts.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (minimum version: 12.x)
- npm (Node Package Manager) installed

### Installation

1. **Clone the Repository**

    ```
    gh repo clone Somsomza/recipe-cloud-computing
    ```

2. **Navigate to the Project Directory**

    ```
    cd recipe-recorder
    ```

4. **Navigate to the Project Directory**

3. **Install Dependencies**

    ```
    npm install
    ```

4. **Configure Clerk Authentication and Database Connection**

    Create `.env.local` file and put in the `CLERK_PUBLIC_KEY` and `CLERK_API_KEY` with your Clerk public and secret keys obtained from your Clerk dashboard.
   
    Replace the database connection URL in the .env file with your actual database connection URL

    ```
    npx prisma db push
    ```

### Running the Application

  ```bash
  npm run dev
  ```



