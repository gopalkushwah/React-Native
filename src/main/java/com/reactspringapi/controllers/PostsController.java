package com.reactspringapi.controllers;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.reactspringapi.entity.Posts;
import com.reactspringapi.services.PostService;

@RestController
public class PostsController {

    @Autowired
    private PostService postService;

    @PostMapping("/save-posts")
    public ResponseEntity<?> savePost(@RequestBody Posts posts){
        Posts savePosts = this.postService.savePosts(posts);
        if(Objects.nonNull(savePosts))
            return  ResponseEntity.ok(savePosts);
        else
            return  ResponseEntity.ok("Something Went Wrong");
    }
    @GetMapping("/posts")
    public ResponseEntity<List<?>> getAllPosts(){
        List<Posts> allPosts = this.postService.getAllPosts();
        if(Objects.nonNull(allPosts))
            return  ResponseEntity.ok(allPosts);
        else
            return  ResponseEntity.notFound().build();
    }
    
}