variable "profile" {
  type = string
}
variable "domain_name" {
  type = string
}
variable "subdomain_name" {
  type = string
}
variable "pages_domain" {
  type = string
}
variable "pages_ips_v6" {
  type = list(string)
}
variable "pages_ips_v4" {
  type = list(string)
}

