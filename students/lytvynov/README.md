# Індивідуальний DevOps-проєкт (рактичне заняття 14)

**втор:** итвинов ікіта, група -41

## 1. ризначення проєкту
еб-застосунок на базі **Node.js**, контейнеризований за допомогою **Docker**, із повністю автоматизованим розгортанням хмарної інфраструктури (**Terraform** на **AWS EC2**) та безперервною доставкою (**GitHub Actions**).

## 2. окальний запуск у Docker
ерейдіть у папку \students/lytvynov\ та виконайте:
\\\ash
docker build -t final-nodeapp .
docker run -d --name final-app -p 3000:3000 final-nodeapp
\\\
астосунок буде доступний за адресою: \http://localhost:3000\.

## 3. обота CI/CD пайплайну та деплой
ри злитті змін у гілку \main\ автоматично запускається воркфлоу \.github/workflows/deploy.yml\:
1. **Infrastructure Provisioning:** Terraform ініціалізує конфігурацію в \students/lytvynov/terraform\, створює Security Group (порти 22 та 3000) і розгортає сервер AWS EC2 (\	3.micro\, Ubuntu 22.04) із встановленням Docker.
2. **Build & Push:** GitHub Actions збирає оптимізований образ на базі \
ode:20-alpine\ та публікує його в Docker Hub.
3. **Deploy:** айплайн підключається до створеного EC2 по SSH, завантажує образ із Docker Hub та запускає контейнер на порту 3000.

## 4. мінні середовища та GitHub Secrets
ля роботи пайплайну у налаштуваннях репозиторію (\Settings -> Secrets and variables -> Actions\) використовуються такі секрети:
- \DOCKER_USERNAME\ — логін облікового запису Docker Hub;
- \DOCKER_TOKEN\ — токен доступу для публікації образів у Docker Hub;
- \AWS_ACCESS_KEY_ID\ — ідентифікатор ключа доступу AWS IAM;
- \AWS_SECRET_ACCESS_KEY\ — секретний ключ доступу AWS IAM;
- \EC2_SSH_KEY_B64\ — приватний SSH-ключ для підключення до інстансу EC2, закодований у Base64.
