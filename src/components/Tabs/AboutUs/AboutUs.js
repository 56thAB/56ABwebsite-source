import React from 'react'
import styles from "./AboutUs.module.css"

export default function AboutUs() {
  return (
    <div className={styles.div}>


  <p>{"[56AB] is a Terran outfit founded on the 16th of June 2020. The goal of the 56th Assault Battalion is to create a great gaming space and community for self development, and for the enjoyment of the game."}</p>
      <table className={styles.table}>
    <tr>
      <th>{"The ways we aim to achieve our goals are:"}</th>
      <th>{"Our Principles"}</th>      
    </tr>
     <tr>
       <td>{"◉ Public Squads"}</td>
       <td>{"◉ Enjoying the game & having fun, this is our number one principle"}</td>
     </tr>
     <tr>
      <td>{"◉ Chill Squads"}</td>
      <td>{"◉ No faction loyalty, (You are free to join any faction that you want to)"}</td>
    </tr>
    <tr>
      <td>{"◉ Tactical Squads"}</td>
      <td>{"◉ If you want to, you can be in as many Outfits that you want to be in"}</td>
    </tr>
    <tr>
      <td>{"◉ Tryhard Squads"}</td>
      <td>{"◉ Encouraging teamwork and communication"}</td>
    </tr>
    <tr>
      <td>{"◉ Trainings"}</td>
      <td></td>
    </tr>
    <tr>
      <td>{"◉ Providing Newcomers with Training Videos And Guides"}</td>
      <td></td>
    </tr>
    <tr>
      <td>{"◉ A Chilled And Relaxed Environment"}</td>
      <td></td>
    </tr>      
    </table>
           
    <p class="aboutustext"> {"Our community is very friendly and welcoming to all those that wish to join."}
  
     {" We have no restrictions on joining, and we are more than happy to help you get to know the ropes."}
  
      {"If you need help with learning how to use new Weapons, completing Missions, Directives and improving upon your skills within the game, or just looking for people to play with, we are here to help."}      
      {"We are a family of players, and we want to help you grow within PlanetSide 2."}</p>



    </div>
  )
}
