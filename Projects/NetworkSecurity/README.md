<br/>
<p align="center">

  <h3 align="center">NetworkSecurity</h3>

  <p align="center">
    An end to end ML project for phishing attack detection with complete MLOps pipeline
    <br/>
    <br/>
    <a href="https://github.com/itsskofficial/Machine-Learning">View Demo</a>
    .
    <a href="https://github.com/itsskofficial/Machine-Learning/issues">Report Bug</a>
    .
    <a href="https://github.com/itsskofficial/Machine-Learning/issues">Request Feature</a>
  </p>
</p>


![License](https://img.shields.io/github/license/itsskofficial/Machine-Learning) 



## Table Of Contents



* [About the Project](#about-the-project)

* [Built With](#built-with)

* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)

  * [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [License](#license)

* [Authors](#authors)

* [Acknowledgements](#acknowledgements)



## About The Project



NetworkSecurity is a phishing attack detection project leveraging machine learning. It employs an end-to-end MLOps pipeline covering stages such as ETL (Extract, Transform, Load), model training, evaluation, and inference. The application uses **Python FastAPI** for deployment and is containerized with Docker for scalability. Deployment is handled via **AWS ECR** and **AWS EC2**, ensuring robust cloud integration and availability. The project implements best practices in MLOps, such as modularized code, model tracking, and versioning, for a maintainable and extensible solution.



## Built With



This section lists major frameworks and tools used in the project:



* [Python](https://python.org)

* [FastAPI](https://fastapi.tiangolo.com/)

* [Docker](https://www.docker.com/)

* [AWS](https://aws.amazon.com/)

* [MLflow](https://mlflow.org/)



## Getting Started



Follow these steps to set up the project locally.



### Prerequisites



* **Python:**

  Ensure you have Python 3.8 or above installed.



* **Docker:**

  Install Docker for containerization.



  ```sh
  # Verify Docker installation

  docker --version
   ```

### Installation



1. **Clone the repository**

   ```sh
   git clone https://github.com/itsskofficial/Machine-Learning.git
   ```


2. **Navigate to the project directory**

   ```sh
   cd Projects/NetworkSecurity
   ```

3. **Install Python dependencies**

   ```sh
   pip install -r requirements.txt
   ```

4. **Build the Docker image**

   ```sh
   docker build -t networksecurity:latest .
   ```


5. **Run the Docker container**

   ```sh
   docker run -p 8000:8000 networksecurity:latest
   ```

## Usage



NetworkSecurity is designed to identify phishing attacks in real-time. The FastAPI application exposes RESTful endpoints for inference, allowing you to send inputs and receive predictions. The MLOps pipeline ensures that data preprocessing, model training, and deployment are modular and easily extensible.



### Example Usage



After starting the Docker container, access the FastAPI documentation at `http://localhost:8000/docs` to test endpoints interactively.



## Contributing



Contributions make the open source community a fantastic place to learn, inspire, and create. All contributions are highly appreciated.



If you have ideas for improvement, feel free to fork the repo and create a pull request or open an issue with the tag "enhancement". Don't forget to give the repository a star!



### Creating A Pull Request



1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request



## License



Distributed under the MIT License. See [LICENSE](https://github.com/itsskofficial/Machine-Learning/blob/main/LICENSE.md) for more information.



## Acknowledgements



* [Krish Naik](https://www.krishnaik.in/)

* [FastAPI Documentation](https://fastapi.tiangolo.com/)

* [Docker Documentation](https://docs.docker.com/)

* [AWS Documentation](https://aws.amazon.com/documentation/)
