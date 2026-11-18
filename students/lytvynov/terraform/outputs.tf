output "ec2_public_ip" {
  value = aws_instance.final_project_ec2.public_ip
}
