package softuniBlog.entity;

import javax.persistence.*;

@Entity
@Table (name = "articles")
public class Article {
    private Integer id;
    private String title;
    private String content;
    private User author;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(nullable = false)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Column(columnDefinition = "text", nullable = false)
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @ManyToOne (targetEntity = User.class)
    @JoinColumn(nullable = false, name = "authorId")
    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public Article(String title, String content, User author) {
    this.title = title;
    this.content = content;
    this.author = author;
    }

    public Article(){

    }

    @Transient
    public String getSummary(){
        if (this.content.length() > 50) {
            return this.content.substring(0, 50) + "...";
        } else {
            return  this.content;
        }
    }
}
