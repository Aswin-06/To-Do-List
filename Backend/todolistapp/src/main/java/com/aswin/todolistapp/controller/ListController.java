package com.aswin.todolistapp.controller;

import com.aswin.todolistapp.model.ListItem;
import com.aswin.todolistapp.service.ListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpRequest;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ListController {

    ListService ser;
    @Autowired
    public ListController(ListService ser) {
        this.ser = ser;
    }

    @GetMapping("/item")
    public ResponseEntity<List<ListItem>> getItem()
    {
        List<ListItem> item=ser.getItem();
        return new ResponseEntity<>(item,HttpStatus.OK);
    }

    @PostMapping("/item")
    public ResponseEntity<ListItem> additem(@RequestPart("value") ListItem item)
    {
        ListItem item1=ser.additem(item);
        return new ResponseEntity<>(item1,HttpStatus.OK);
    }

    @PutMapping("/item")
    public ResponseEntity<ListItem> updateItem(@RequestPart("value") ListItem item)
    {
        ListItem item1=ser.updateitem(item);
        return new ResponseEntity<>(item1,HttpStatus.OK);
    }

    @GetMapping("/item/{id}")
    public ResponseEntity<ListItem> getItemById(@PathVariable int id)
    {
        ListItem item=ser.getItemById(id);
        return new ResponseEntity<>(item,HttpStatus.OK);
    }

    @DeleteMapping("/delitem/{id}")
    public void delItem(@PathVariable int id)
    {
        ser.delItem(id);
    }

    @PutMapping("/changeorder/{id}")
    public void changeOrder(@PathVariable int id)
    {
        ser.changeOrder(id);
    }
}
