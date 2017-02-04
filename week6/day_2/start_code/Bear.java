import java.util.*;

public class Bear{
  
  private String name;
  // private ArrayList<Salmon> bellySalmon;
  private ArrayList<Edible> belly;

  public Bear(String name){
    this.name = name;
    // this.bellySalmon = new ArrayList<Salmon>();
    this.belly = new ArrayList<Edible>();
  }

  public String getName(){
    return this.name;
  }

  public int foodCount(){
    return this.belly.size();
    // return bellySalmon.size() + bellyHuman.size();

    // int count = 0;
    // for(Salmon salmon : belly){
    //   if(salmon != null){
    //     count++;
    //   }
    // }
    // return count;
  }

  // public void eat(Salmon salmon){
  //   this.bellySalmon.add(salmon);
   // if(bellyFull()) return;
   // int foodCount = foodCount();
   // belly[foodCount] = salmon;
 // }

 public void eat(Edible food){
    this.belly.add(food);
 }

 // public boolean bellyFull(){
 //   return foodCount() == belly.length;
 // } no longer required as arraylist does not have limits like an array so you can keep adding salmon

 public void sleep(){
  // this.bellySalmon.clear();
  this.belly.clear();
   // for(int i = 0; i < belly.length; i++){
   //   belly[i] = null;
   // }
 }

 public Edible throwUp(){
  if (foodCount() > 0) {
    return belly.remove(0);
  }
  return null;
 }

}
