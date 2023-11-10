package com.reactspringapi.controllers;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.reactspringapi.entity.Posts;
import com.reactspringapi.services.PostService;

@RestController
public class PostsController {

    @Autowired
    private PostService postService;

    @PostMapping("/posts")
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
    

    @PutMapping("/posts/update")
    public ResponseEntity<?> updatePost(@RequestBody Posts posts){
        Posts savePosts = this.postService.updatePosts(posts);
        if(Objects.nonNull(savePosts))
            return  ResponseEntity.ok(savePosts);
        else
            return  ResponseEntity.ok("Something Went Wrong");
    }
    @DeleteMapping("/posts/delete/{id}")
    public ResponseEntity<String> deletePost(@PathVariable("id") int id){
        try {
            this.postService.deletePosts(id);
            return ResponseEntity.ok("Deleted Successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok("Deleted Successfully");
        }
    }
    @GetMapping("/posts/q/{query}")
    public ResponseEntity<List<?>> searchPosts(@PathVariable("query") String query){
        try {
            List<Posts> searchPosts = this.postService.searchPosts(query);
            return ResponseEntity.ok(searchPosts);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.notFound().build();
        }
    }
}