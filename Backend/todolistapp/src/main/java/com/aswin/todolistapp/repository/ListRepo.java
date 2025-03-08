package com.aswin.todolistapp.repository;

import com.aswin.todolistapp.model.ListItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListRepo extends JpaRepository<ListItem,Integer> {

}
