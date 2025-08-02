# ⚡ Quick Setup - GitHub Pages Deployment

## 🚀 5-Minute Setup

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click **"New repository"**
3. Name: `yusufbekprosmm.uz`
4. Make it **Public**
5. Click **"Create repository"**

### Step 2: Push Your Code
```bash
# Run these commands in your project folder
git remote add origin https://github.com/yusufbekmahmuthanov/yusufbekprosmm.uz.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll to **"Pages"** section
4. Source: **"Deploy from a branch"**
5. Branch: **"main"**
6. Folder: **"/ (root)"**
7. Click **"Save"**

### Step 4: Wait & Visit
- **Wait 5-10 minutes** for deployment
- **Visit**: `https://yusufbekmahmuthanov.github.io/yusufbekprosmm.uz`

## ✅ Done!

Your website is now live on GitHub Pages! 🎉

---

## 🔧 Troubleshooting

### If push fails:
```bash
# Check if remote is added
git remote -v

# If not, add it again
git remote add origin https://github.com/yusufbekmahmuthanov/yusufbekprosmm.uz.git
```

### If site doesn't load:
1. Check repository is **Public**
2. Wait **5-10 minutes** for deployment
3. Check **Actions** tab for errors

### If images don't show:
1. Verify all image files are pushed
2. Check file paths in `images.js`
3. Clear browser cache

---

## 📞 Need Help?

- **GitHub Issues**: Create issue in repository
- **Documentation**: See `GITHUB_PAGES_SETUP.md`
- **Full Guide**: See `DEPLOYMENT.md` 