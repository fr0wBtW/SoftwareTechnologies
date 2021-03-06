package projectrider.entity;

import javax.persistence.*;

@Entity
@Table(name = "projects")
public class Project {

    @Id
   private Integer id;
   private String title;
   private String description;
   private Integer budget;

    public Project() {
    }

    public Project(String title, String description, Integer budget) {
        this.title = title;
        this.description = description;
        this.budget = budget;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "title", nullable = false, columnDefinition = "text")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Column(nullable = false, columnDefinition = "text")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Column(nullable = false)
    public Integer getBudget() {
        return budget;
    }

    public void setBudget(Integer budget) {
        this.budget = budget;
    }
}
