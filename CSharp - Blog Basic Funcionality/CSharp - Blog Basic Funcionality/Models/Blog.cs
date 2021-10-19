using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CSharp___Blog_Basic_Funcionality.Models
{
    public class Blog
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Category { get; set; }

        public string Summary { get; set; }

        [Required]
        [Column(TypeName = "text")]
        public string Content { get; set; }

        List<Blog> blogs = new List<Blog>();
    }
}