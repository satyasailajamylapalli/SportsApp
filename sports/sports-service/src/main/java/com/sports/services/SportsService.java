package com.sports.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sports.repository.SportsLeagueRepository;
import com.sports.repository.model.SportsLeague;

@Service
public class SportsService {

	@Autowired
	private SportsLeagueRepository repository;
	
	public SportsLeague addFavoriteLeague(SportsLeague sport) {
		return repository.save(sport);
	}
	
	public List<SportsLeague> getFavoriteSportsLegaue(String username){
		Optional<List<SportsLeague>> sportsLeagueOptions = repository.findByusername(username);
		return sportsLeagueOptions.isPresent()? sportsLeagueOptions.get(): null;
	
	}
}
