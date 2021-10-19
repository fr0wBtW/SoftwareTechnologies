using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSharp___Blog_Basic_Funcionality.Data;
using CSharp___Blog_Basic_Funcionality.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CSharp___Blog_Basic_Funcionality.Controllers
{
    public class BlogController : Controller
    {
        private readonly ApplicationDbContext context;
        public BlogController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        [Route("get-blogs")]
        public IActionResult GetAllBlogs()
        {
            List<Blog> blogs = this.context.Blogs.Select(a => new Blog { Name = a.Name, Category = a.Category, Content = a.Content.Substring(0, 20) + "...", Summary = a.Summary }).ToList();
            return View(blogs);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [Authorize]
        public IActionResult Create(Blog blog)
        {
            this.context.Blogs.Add(blog);
            this.context.SaveChanges();
            return RedirectToAction("GetAllBlogs");
        }

        [HttpPost]
        public IActionResult Edit(Blog blog)
        {
            if (ModelState.IsValid)
            {
                this.context.Blogs.Update(blog);
                this.context.SaveChanges();
                return RedirectToAction("GetAllBlogs");
            }
            return View(blog);
        }
    }
}