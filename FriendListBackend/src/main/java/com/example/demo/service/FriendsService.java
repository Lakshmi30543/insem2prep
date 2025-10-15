package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.example.demo.entity.Friends;
import com.example.demo.repository.FriendsRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FriendsService {

	    private final FriendsRepository friendRepository;

	    // Constructor injection
	    public FriendsService(FriendsRepository friendRepository) {
	        this.friendRepository = friendRepository;
	    }

	    public Friends postFriends(Friends friend) {
	        return friendRepository.save(friend);
	    }
	    
	    public List<Friends> getAllFriends() {
	        return friendRepository.findAll();
	    }


}
