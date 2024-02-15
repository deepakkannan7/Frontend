package com.advancedapp.stuenqportal.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.advancedapp.stuenqportal.Entity.UserInfo;



public interface UserInfoRepository extends JpaRepository<UserInfo, String> {

}