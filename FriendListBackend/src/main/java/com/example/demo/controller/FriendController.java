package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.Friends;
import com.example.demo.service.FriendsService;

@CrossOrigin(origins = "http://localhost:9010")
@RestController
@RequestMapping("/friendapi")
public class FriendController {

    private final FriendsService friendService;

    public FriendController(FriendsService friendService) {
        this.friendService = friendService;
    }

    @PostMapping("/add") 
    public Friends postFriend(@RequestBody Friends friend) {
        return friendService.postFriends(friend);
    }
     	
    @GetMapping("/all")
    public List<Friends> getAllFriends() {
        return friendService.getAllFriends();
    }
}
