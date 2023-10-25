import { BlogBuilder } from "../../components/blog/BlogBuilder";

export default new BlogBuilder({
  id: "aesthetics-of-code",
  title: "Aesthetics of Code: Artistry in Lines and Logic",
  cover: require("../../assets/blog/aesthetics-of-code/book-and-code.jpg"),
  publishedDate: "2023-10-21",
  description: (
    <>
      In this exploration, we embark on the often-overlooked beauty within the
      lines of code — where logic meets imagination. More than just a tool, it
      can be likened to poetry, a creative expression woven through lines and
      logic.
    </>
  ),
})
  .addParagraph(
    <>
      In the relentless pace of technological evolution, functionality typically
      takes center stage. Yet, lies a realm where logic meets creativity — code
      aesthetics, a beauty that people often don't see. In this post, I aim to
      articulate my perspective about the aesthetic dimensions of coding, and
      how logic and lines form art.
    </>
  )
  .addParagraph(
    <>
      While I don't claim the title of an artist, this writing represents my
      personal journey into recognizing the aesthetic nature of coding. It is
      also not a tutorial on how to craft a pristine code, but rather a thought
      sparked by conversations with{" "}
      <a
        href="https://www.instagram.com/tilukudi/"
        target="_blank"
        rel="noreferrer"
      >
        my brother
      </a>
      —an artist with radical yet revolutionary ideas. To him, art is
      omnipresent, and anything can embody art. Among his profound reflections,
      he stated,{" "}
      <i>
        "Art is the wisdom to understand through emotion, while science unfolds
        through logic".
      </i>{" "}
      As for coding? Well, both exist in the realm of coding.
    </>
  )
  .addParagraph(
    <>
      This post not only discusses the outcomes of code. Whether it be frontend
      magic that produces captivating UI/UX, or backend precision ensuring a
      program execution. It also uncovers the beauty of writing code itself.
    </>
  )
  .addHeading("Code and Poetry: A Symbiotic Symphony")
  .addParagraph(
    <>
      Can a poem be turned into a code? The first point I want to discuss is the
      close relationship between code and poetry.
    </>
  )
  .addParagraph(
    <>
      An entangled symbiosis between code and poetry unravels a sincere
      connection. In this exploration, we walk through into the realms of
      Mahmoud Darwish's "I Belong There" and Chairil Anwar's "Whispering Pines",
      seeking parallels between the beauty of the verses and the structured
      syntax of code.
    </>
  )
  .addHeadingTwo("I Belong There: Identity Declarations in Code")
  .addCodeBlock({
    language: "text",
    code: `I belong there. I have many memories. I was born as everyone is born.
I have a mother, a house with many windows, brothers, friends, and a prison cell
with a chilly window! I have a wave snatched by seagulls, a panorama of my own.

I have a saturated meadow. In the deep horizon of my word, I have a moon,
a bird's sustenance, and an immortal olive tree.
I have lived on the land long before swords turned man into prey.

I belong there. When heaven mourns for her mother, I return heaven to her mother.
And I cry so that a returning cloud might carry my tears.
To break the rules, I have learned all the words needed for a trial by blood.
I have learned and dismantled all the words in order to draw from them a single word: Home.
`,
    caption: (
      <>
        Darwish, Mahmoud.{" "}
        <i>
          Unfortunately, It Was Paradise (translated by Carolyn Forché and Munir
          Akash).
        </i>{" "}
        2003, University of California Press
      </>
    ),
  })
  .addParagraph(
    <>
      "I Belong There" reflects Darwish's contemplation of identity and
      belonging. In this poetic interpretation, we draw a parallel to variable
      declarations in code. The poet declares himself to belong to a particular
      and specific place, just as a variable belongs to the code with the values
      and functions it has.
    </>
  )
  .addParagraph(
    <>
      Darwish also wrote that he had family and friends, like a set of variables
      that complemented each other. I also think that Darwish feels anxious and
      unpleasant when isolated, similar to a variable of a certain type when
      assigned with values from a different type.
    </>
  )
  .addParagraph(<>I interpreted the poem in the following code:</>)
  .addCodeBlock({
    language: "csharp",
    code: `class PersonAtHome
    {
        public string Name { get; set; }
        public string BelongsTo { get; set; }
    
        public PersonAtHome(string name)
        {
            Name = name;
            BelongsTo = "Home";
        }
    }
    
    class PersonExiled
    {
        public string Name { get; set; }
        public string BelongsTo { get; set; }
    
        public PersonExiled(string name)
        {
            Name = name;
            BelongsTo = "Prison";
        }
    }
    
    class Program
    {
        static void IBelongThere()
        {
            var i = new PersonAtHome("I");
            var mother = new PersonAtHome("Mother");
    
            // Cannot implicitly convert type 'PersonExiled' to 'PersonAtHome'
            i = new PersonExiled(i.Name);
        }
    }
`,
  })
  .addBr()
  .addHeadingTwo("Whispering Pines: Iterative Elements in Code")
  .addCodeBlock({
    language: "text",
    code: `the pines whisper into the distance,
it feels as though day is in fact becoming night,
there are some brittle branches on the tiny window,
struck by an unseen wind.

now I (am the person who) can endure,
for quite some time (I've been) no longer a child,
but long ago (I) definitely had something,
which now no longer essentially counts.

life only postpones defeat,
(we, or: it) become(s) ever more distant from the love of school-days,
and (we) know, there is something that remains untold,
before we finally surrender. 
`,
    caption: (
      <>
        Oemarjati, Boen S. <i>Chairil Anwar: The Poet And His Language.</i>{" "}
        1972, Leiden: Hague-Martinus Nijhoff.
      </>
    ),
  })
  .addParagraph(
    <>
      A rhythmic flow of themes across three stanzas invites comparison to an
      iterative element in code, where a loop continues to repeat itself
      following a specific set of instructions.
    </>
  )
  .addParagraph(
    <>
      On the third stanza, Anwar stated that life only postpones defeat. Which
      is obvious, life is an infinite loop until the end of the iteration.
    </>
  )
  .addParagraph(<>My interpretation of the poem in a code is as follows:</>)
  .addCodeBlock({
    language: "csharp",
    code: `public class Stanza
  {
      public string Theme { get; set; }
      public List<string> Properties { get; set; }
  
      public Stanza(string theme, List<string> properties)
      {
          Theme = theme;
          Properties = properties;
      }
  }
  
  class Program
  {
      static void WhisperingPines()
      {
          List<Stanza> stanzas =
              new()
              {
                  new Stanza(
                      "Whispering Pines",
                      new() { "Day becomes night", "Struck by an unseen wind" }
                  ),
                  new Stanza(
                      "Grown Person",
                      new() { "No longer a child", "Nothing else that counted" }
                  ),
                  new Stanza(
                      "The End",
                      new() { "Distant from love", "Finally surrendered and defeated" }
                  )
              };
  
          foreach (var _ in stanzas)
          {
              // life
          }
  
          // surrendered and defeated
      }
  }
`,
  })
  .addParagraph(
    <>
      This symbiotic relationship between code and poetry reveals a narrative
      where the elegance of syntax and the charm of verses converge, creating a
      symphony of expression transcending boundaries.
    </>
  )
  .addHeading("Representation of Visual Code: Symphony of Structure")
  .addParagraph(
    <>
      In the realm of programming, the term clean code is a concept introduced
      by Robert C. Martin, emphasizing the importance of writing code that is a
      delight to read, understand, and maintain. Clean code is not merely making
      the code work, but also guiding developers towards a harmonious blend of
      functionality and aesthetics.
    </>
  )
  .addParagraph(
    <>
      A code that is well-structured and concise can evoke an aura of elegance
      and beauty, such code follows an orderly flow of logic.
    </>
  )
  .addHeadingTwo("Not-So-Clean Code")
  .addCodeBlock({
    language: "csharp",
    code: `public class U {
      public string N1 {get; set;}
      public string N2 {get; set;}
  
      public string N() {
          return $"{N1} {N2}";
      }
  }
  
  public class UC {
      private readonly UR _ur;
  
      public UC(UR uR) {
          _ur = uR;
      }
  
      public IActionResult GUFN(int uI) {
          var u = _ur.GUBI(uI);
  
          if (u == null) { return NotFound(); }
  
          var n = u.N();
  
          return Ok(new { N = n });
      }
  }
  
`,
  })
  .addBr()
  .addHeadingTwo("Clean Code")
  .addCodeBlock({
    language: "csharp",
    code: `public class User
{
    public string FirstName { get; set; }
    public string LastName { get; set; }

    public string GetFullName()
    {
        return $"{FirstName} {LastName}";
    }
}

public class UserController
{
    private readonly UserRepository _userRepository;

    public UserController(UserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public IActionResult GetUserFullName(int userId)
    {
        var user = _userRepository.GetUserById(userId);

        if (user == null)
        {
            return NotFound();
        }

        var fullName = user.GetFullName();

        return Ok(new { FullName = fullName });
    }
}
`,
  })
  .addParagraph(
    <>
      Its elegance can be seen in the simplicity and clarity each component
      supports and fits together. Good code often uses expressive naming that is
      conveyed clearly, like, <b>GetUserFullName()</b>. Not only is it clear,
      but the naming of the method is also beautiful.
    </>
  )
  .addParagraph(
    <>
      Consistency and aesthetically pleasing formatting elevates the beauty of
      the code. Structured code follows a consistent mix of styles, from naming
      formats to the appropriate placement of whitespace and indents, making a
      visual harmony that is as pleasing to the eye.
    </>
  )
  .addParagraph(
    <>
      The code receives an additional layer of vibrancy through syntax
      highlighting. This visual aid, provided by code editors, assigns distinct
      colors to different components, transforming the code that is not only
      functional but also a pleasure to look at.
    </>
  )
  .addHeading("The Creative Symphony of Coding")
  .addParagraph(
    <>
      The realm of coding is undoubtedly a form of digital creativity, where
      programmers weave their ideas, problem-solving prowess, and innovative
      thinking through lines of code. In this final point, we delve into the
      vibrant world of creative coding.
    </>
  )
  .addParagraph(
    <>
      As showcased in the first point, we tried to transform poetry into code.
      But there is an art called digital code poetry where the poetry is
      actually created using code. Code poetry, compositions that are not just
      readable by humans like poetry, but can also be compiled and executed by
      machines. The Perl programming language community has notably embraced
      this artistic idea, maintaining a dedicated thread for code poetry
      submissions at{" "}
      <a
        href="https://perlmonks.org/index.pl?node=Perl%20Poetry"
        target="_blank"
        rel="noreferrer"
      >
        Perl Monks
      </a>
      .
    </>
  )
  .addParagraph(
    <>
      There are also many other creative projects that can be expressed through
      code.
    </>
  )
  .addHeadingTwo("UI/UX Design")
  .addParagraph(
    <>
      Designing visually captivating and user-friendly interfaces, along with
      seamless animations and engaging user interactions, is essential. Whether
      it's crafting interactive websites, developing mobile applications, or
      designing games, infusing a creative flair is crucial to elevate the
      overall user experience.
    </>
  )
  .addHeadingTwo("Artistic and Creative Coding")
  .addParagraph(
    <>
      Code becomes a tool for generating visual art and music. Platforms like
      <a href="https://processing.org/" target="_blank" rel="noreferrer">
        Processing
      </a>{" "}
      and{" "}
      <a href="https://p5js.org/" target="_blank" rel="noreferrer">
        p5.js
      </a>{" "}
      are popular for crafting interactive art.
    </>
  )
  .addHeadingTwo("Game Development")
  .addParagraph(
    <>
      Developing video games involves creative thinking in designing game
      mechanics, storytelling, and character development. Game developers
      express their creativity through both code and visual elements.
    </>
  )
  .addHeadingTwo("Artificial Intelligence")
  .addParagraph(
    <>
      Artificial Intelligence (AI) plays a significant role in creative coding
      across diverse domains by enabling a relationship between human creativity
      and machine intelligence.
    </>
  )
  .addHeading("Conclusion")
  .addParagraph(
    <>
      In the ever-evolving landscape of technology, where functionality often
      takes center stage, it is also important to acknowledge the beauty of the
      lines and logic in code.
    </>
  )
  .addParagraph(
    <>
      Code aesthetics offer a glimpse into a side of technology that transcends
      mere utility. As we keep going ahead to the realm of innovation, let us
      not forget to appreciate the digital artistry in every line of code.
    </>
  );
