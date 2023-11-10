package com.reactspringapi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reactspringapi.entity.Posts;
import com.reactspringapi.reposetory.PostsRepository;

@Service
public class PostService {
    
    @Autowired
    private PostsRepository postsRepository;

    // CREATE POST
    public Posts savePosts(Posts posts){
        Posts save = this.postsRepository.save(posts);
        return save;
    }

    // GET POST BY ID
    public Posts getPosts(int id){
        Posts getById = this.postsRepository.findById(id).get();
        return getById;
    }

    // GET ALL POST
    public List<Posts> getAllPosts(){
        List<Posts> getAll = this.postsRepository.findAll();
        return getAll;
    }
    // UPDATE POST BY ID
    public Posts updatePosts(Posts posts){
        Posts update = this.postsRepository.save(posts);
        return update;
    }

    // DELETE POST BY ID

    public void deletePosts(int id){
        Posts posts = this.getPosts(id);
        this.postsRepository.delete(posts);
    }
}
