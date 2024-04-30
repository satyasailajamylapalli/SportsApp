package com.sports.repository;

import com.sports.repository.model.SportsLeague;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SportsLeagueRepository extends JpaRepository<SportsLeague, String> {

   Optional<List<SportsLeague>> findByusername(String username);

}
