data "aws_route53_zone" "top" {
  name = var.domain_name
}

resource "aws_route53_zone" "sub" {
  name    = var.subdomain_name
  comment = "subdomain for ${var.domain_name}"
}

# delegate subdomain
resource "aws_route53_record" "sub_ns" {
  zone_id = data.aws_route53_zone.top.zone_id
  name    = var.subdomain_name
  type    = "NS"
  ttl     = 1
  records = aws_route53_zone.sub.name_servers
}

# IPv6 subdomain record
resource "aws_route53_record" "pages_v6" {
  zone_id = aws_route53_zone.sub.id
  name    = var.subdomain_name
  type    = "AAAA"
  ttl     = 1
  records = var.pages_ips_v6
}

# IPv4 subdomain record
resource "aws_route53_record" "pages_v4" {
  zone_id = aws_route53_zone.sub.id
  name    = var.subdomain_name
  type    = "A"
  ttl     = 1
  records = var.pages_ips_v4
}
