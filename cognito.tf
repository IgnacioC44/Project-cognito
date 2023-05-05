terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = "us-west-2"
}

resource "aws_cognito_user_pool" "example" {
  name = "my-user-pool"
}

resource "aws_cognito_user_group" "example" {
  name       = "my-cognito-user-group"
  user_pool_id = aws_cognito_user_pool.example.id
}

resource "aws_cognito_user" "example" {
  username         = "userCognito"
  password         = "Password123!"
  user_pool_id     = aws_cognito_user_pool.example.id
}
