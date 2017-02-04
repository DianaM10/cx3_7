class Planet{
  private String name;
  private long size;


  public Planet(String planetName, long size){
    this.name = planetName;
    this.size = size;
  }

  public String getName(){
    return this.name;
  }

  public long getSize(){
    return this.size;
  }

  public void explode(){
    System.out.println("Boom!"+ this.name +" has exploded");
  }


}