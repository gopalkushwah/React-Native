package com.reactspringapi.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reactspringapi.entity.Posts;

public interface PostsRepository extends JpaRepository<Posts,Integer>{
    
}
