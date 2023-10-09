package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.sql.Timestamp;
import java.util.HashMap;

@SpringBootApplication
@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@PostMapping("/post-message")
	HashMap<String, String> postMessage(@RequestBody HashMap<String, String> message) {
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		message.put("timestamp", timestamp.getTime() + "");
		message.put("method", "POST");
		message.put("uri", "/post-message");
		return message;
	}


}
