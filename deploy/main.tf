data "aws_route53_zone" "top" {
  name = var.domain_name
}

# Github domain validation
resource "aws_route53_record" "site_cname" {
  zone_id = data.aws_route53_zone.top.zone_id
  name    = var.pages_config.txt.key
  type    = "TXT"
  ttl     = 60
  records = [var.pages_config.txt.value]
}

# IPv6 custom domain config
resource "aws_route53_record" "pages_v6" {
  zone_id = data.aws_route53_zone.top.zone_id
  name    = var.domain_name
  type    = "AAAA"
  ttl     = 30
  records = var.pages_config.ips.v6
}

# IPv4 custom domain config
resource "aws_route53_record" "pages_v4" {
  zone_id = data.aws_route53_zone.top.zone_id
  name    = var.domain_name
  type    = "A"
  ttl     = 30
  records = var.pages_config.ips.v4
}
