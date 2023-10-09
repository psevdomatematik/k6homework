# k6homework
## Сборка и запуск заглушки
POST-запрос осуществляется по адресу 127.0.0.1:8080/post-message
1. git clone https://github.com/psevdomatematik/k6homework.git
2. cd k6homework
3. mvn install
4. java -jar target/demo-0.0.1.jar
   
## Подготовка мониторинга и запуск скрипта нагрузки
Дашбоард доступен по адресу http://127.0.0.1:5665
1. go install go.k6.io/xk6/cmd/xk6@latest
2. xk6 build --with github.com/grafana/xk6-dashboard@latest
3. ./k6 run --out dashboard script.js
