data "aws_route53_zone" "top" {
  name = var.domain_name
}

# delegate subdomain
resource "aws_route53_record" "site_cname" {
  zone_id = data.aws_route53_zone.top.zone_id
  name    = var.domain_name
  type    = "CNAME"
  ttl     = 60
  records = [var.pages_domain]
}
