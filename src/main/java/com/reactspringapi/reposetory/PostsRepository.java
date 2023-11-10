package com.reactspringapi.reposetory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import com.reactspringapi.entity.Posts;

public interface PostsRepository extends JpaRepository<Posts,Integer>{

    @Query("SELECT p FROM Posts p WHERE p.title LIKE %:searchTerm% OR p.body LIKE %:searchTerm%")
    List<Posts> findBySearchTerm(@Param("searchTerm") String searchTerm);
}
