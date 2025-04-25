provider "azurerm" {
  features {}
}

resource "azurerm_storage_account" "example" {
  name                     = var.storage_account_name
  resource_group_name      = var.resource_group_name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"
}

variable "storage_account_name" {
  description = "The name of the storage account. Must be globally unique."
  type        = string
}

variable "resource_group_name" {
  description = "The name of the resource group where the storage account will be created."
  type        = string
}

variable "location" {
  description = "The Azure region where the storage account will be created."
  type        = string
  default     = "eastus"
}