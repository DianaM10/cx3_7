import static org.junit.Assert.*;
import org.junit.*;
import wizard_management.*;
import behaviours.*;

public class WizardTest {

  Wizard wizard;
  Flyable ride;


  @Before
  public void before(){
    // Broomstick broomstick;
    ride = new Broomstick("Nimbus", 10);
    wizard = new Wizard("Toby", ride);
  }

  @Test
  public void hasName(){
    assertEquals("Toby", wizard.getName());
  }

  @Test
  public void hasBroomstick(){
    Broomstick ride = (Broomstick)wizard.getRide();
    assertEquals("Nimbus", ride.getBrand());
  }

  @Test
  public void canFly(){
    assertEquals(wizard.fly(),"mounting broom, running, skipping, flying!");
  }

  @Test
  public void canFlyDragon(){
    Dragon dragon = new Dragon ("Tilly");
    wizard = new Wizard("Toby", dragon);
    assertEquals("Standing up tall, beating wings, lift off!", wizard.fly());
  }
  @Test
  public void canFlyMagicCarpet(){
    MagicCarpet carpet = new MagicCarpet("purple");
    wizard = new Wizard("Toby", carpet);
    assertEquals("Hovering up, straightening out, flying off!", wizard.fly());
  }
  @Test
  public void canSetRide() {
    Dragon dragon = new Dragon("Eric");
    wizard.setRide(dragon);
    assertEquals("Standing up tall, beating wings, lift off!", wizard.fly());
  }


  
}