using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using CSharp___Blog_Basic_Funcionality.Data;
using CSharp___Blog_Basic_Funcionality.Models;

namespace CSharp___Blog_Basic_Funcionality.Controllers
{
    public class ArticlesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ArticlesController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return RedirectToAction("List");
        }

        public IActionResult List()
        {
            var articles = _context.Articles.Include(a => a.Author).ToList();

            return View(articles);
        }

        public IActionResult Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var article = _context.Articles.Include(a => a.Author).FirstOrDefault(a => a.Id == id);

            if (article == null)
            {
                return NotFound();
            }
            return View(article);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Article article)
        {
            if (ModelState.IsValid)
            {
                var authorId = _context.Users.Where(a => a.UserName == this.User.Identity.Name).First().Id;

                article.AuthorId = authorId;
                _context.Add(article);
                _context.SaveChanges();

                return RedirectToAction("Index");
            }
            return View(article);
        }

        [HttpGet]
        public IActionResult Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var article = _context.Articles.Include(a => a.Author)
                .FirstOrDefault(a => a.Id == id);

            if (article == null)
            {
                return NotFound();
            }
            return View(article);
        }

        [HttpPost]
        public IActionResult Delete(Article article)
        {
            _context.Remove(article);
            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        public IActionResult Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var article = _context.Articles.Include(a => a.Author).FirstOrDefault(a => a.Id == id);

            if (article == null)
            {
                return NotFound();
            }
            return View(article);
        }

        [HttpPost]
        public IActionResult Edit(Article article)
        {
            _context.Update(article);
            _context.SaveChanges();

            return RedirectToAction("Index");
        }
    }
}
