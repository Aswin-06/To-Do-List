package com.aswin.todolistapp.service;

import com.aswin.todolistapp.model.ListItem;
import com.aswin.todolistapp.repository.ListRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListService {

    ListRepo repo;

    @Autowired
    public ListService(ListRepo repo) {
        this.repo = repo;
    }

    public ListItem additem(ListItem item) {
        return repo.save(item);
    }

    public void delItem(int id) {
        repo.deleteById(id);
    }

    public List<ListItem> getItem() {
        return repo.findAll();
    }

    public ListItem getItemById(int id) {
        return repo.findById(id).orElse(new ListItem());
    }


    public ListItem updateitem(ListItem item) {
        return repo.save(item);
    }

    private int index;
    public void changeOrder(int id) {
        List<ListItem> items=repo.findAll();
        for(int i=0;i<items.size();i++)
        {
            ListItem item=items.get(i);
            if(item.getId()==id)
            {
                index=i;
            }
        }
        if(index!=0)
        {
            ListItem ob1=new ListItem(items.get(index).getId(),items.get(index-1).getItem());
            ListItem ob2=new ListItem(items.get(index-1).getId(),items.get(index).getItem());
            repo.save(ob1);
            repo.save(ob2);
        }
    }
}
