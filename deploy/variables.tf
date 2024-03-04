variable "profile" {
  description = "AWS profile string"
  type        = string
}
variable "domain_name" {
  description = "Apex domain for site"
  type        = string
}
variable "pages_config" {
  description = "Github Pages configuration"
  type = object({
    txt = object({
      key   = string
      value = string
    })
    ips = object({
      v4 = list(string)
      v6 = list(string)
    })
  })
}
