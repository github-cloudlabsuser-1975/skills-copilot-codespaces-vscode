# Ensure you are logged into Azure
Connect-AzAccount

# Variables
$resourceGroupName = "MyResourceGroup"
$location = "EastUS"
$vmName = "MyVM"
$adminUsername = "azureuser"
$adminPassword = "P@ssw0rd123!" # Replace with a secure password
$vmSize = "Standard_B1s"
$imagePublisher = "Canonical"
$imageOffer = "UbuntuServer"
$imageSku = "18.04-LTS"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a virtual network
$vnet = New-AzVirtualNetwork -ResourceGroupName $resourceGroupName -Location $location -Name "$vmName-VNet" -AddressPrefix "10.0.0.0/16"
$subnet = Add-AzVirtualNetworkSubnetConfig -Name "$vmName-Subnet" -AddressPrefix "10.0.0.0/24" -VirtualNetwork $vnet
$vnet | Set-AzVirtualNetwork

# Create a public IP address
$publicIp = New-AzPublicIpAddress -ResourceGroupName $resourceGroupName -Location $location -Name "$vmName-PublicIP" -AllocationMethod Dynamic

# Create a network security group
$nsg = New-AzNetworkSecurityGroup -ResourceGroupName $resourceGroupName -Location $location -Name "$vmName-NSG"

# Create a network interface
$nic = New-AzNetworkInterface -ResourceGroupName $resourceGroupName -Location $location -Name "$vmName-NIC" -SubnetId $subnet.Id -PublicIpAddressId $publicIp.Id -NetworkSecurityGroupId $nsg.Id

# Create a virtual machine configuration
$vmConfig = New-AzVMConfig -VMName $vmName -VMSize $vmSize |
    Set-AzVMOperatingSystem -Linux -ComputerName $vmName -Credential (New-Object PSCredential ($adminUsername, (ConvertTo-SecureString $adminPassword -AsPlainText -Force))) |
    Set-AzVMSourceImage -PublisherName $imagePublisher -Offer $imageOffer -Skus $imageSku -Version "latest" |
    Add-AzVMNetworkInterface -Id $nic.Id

# Create the virtual machine
New-AzVM -ResourceGroupName $resourceGroupName -Location $location -VM $vmConfig