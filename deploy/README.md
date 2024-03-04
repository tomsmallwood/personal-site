# Personal Site Deployment

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.7.4 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | >= 5.39.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | 5.39.0 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [aws_route53_record.pages_v4](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) | resource |
| [aws_route53_record.pages_v6](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) | resource |
| [aws_route53_record.site_cname](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) | resource |
| [aws_route53_zone.top](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/route53_zone) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_domain_name"></a> [domain\_name](#input\_domain\_name) | Apex domain for site | `string` | n/a | yes |
| <a name="input_pages_config"></a> [pages\_config](#input\_pages\_config) | Github Pages configuration | <pre>object({<br>    txt = object({<br>      key   = string<br>      value = string<br>    })<br>    ips = object({<br>      v4 = list(string)<br>      v6 = list(string)<br>    })<br>  })</pre> | n/a | yes |
| <a name="input_profile"></a> [profile](#input\_profile) | AWS profile string | `string` | n/a | yes |

## Outputs

No outputs.
<!-- END_TF_DOCS -->