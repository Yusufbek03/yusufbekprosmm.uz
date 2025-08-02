# 🌐 GitHub Pages Setup Guide

## 📋 Prerequisites
- GitHub account
- Git installed on your computer
- Basic knowledge of Git commands

## 🚀 Step-by-Step Setup

### 1. Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click "New repository"** (green button)
3. **Repository name**: `yusufbekprosmm.uz`
4. **Description**: `Professional SMM & Digital Services Website`
5. **Make it Public** (required for free GitHub Pages)
6. **Don't initialize** with README (we already have one)
7. **Click "Create repository"**

### 2. Connect Local Repository to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/yusufbekmahmuthanov/yusufbekprosmm.uz.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll down** to "Pages" section
4. **Source**: Select "Deploy from a branch"
5. **Branch**: Select "main"
6. **Folder**: Select "/ (root)"
7. **Click "Save"**

### 4. Configure Custom Domain (Optional)

If you want to use a custom domain like `yusufbekprosmm.uz`:

1. **In Pages settings**, enter your domain
2. **Create CNAME file** in your repository:
   ```
   yusufbekprosmm.uz
   ```
3. **Configure DNS** with your domain provider:
   - **Type**: CNAME
   - **Name**: @
   - **Value**: `yusufbekmahmuthanov.github.io`

### 5. Verify Deployment

1. **Wait 5-10 minutes** for deployment
2. **Visit your site**: `https://yusufbekmahmuthanov.github.io/yusufbekprosmm.uz`
3. **Check all features** work correctly

## 🔧 Repository Structure

Your repository should look like this:
```
yusufbekprosmm.uz/
├── index.html              # Main page (required)
├── style.css               # Styles
├── script.js               # JavaScript
├── images.js               # Image management
├── img-*.jpg/png/webp      # Images
├── .htaccess               # Server config
├── robots.txt              # SEO
├── sitemap.xml             # SEO
├── README.md               # Documentation
└── .gitignore              # Git ignore rules
```

## 📊 GitHub Pages Features

### Automatic Deployment
- **Every push** to main branch triggers deployment
- **Build time**: 1-5 minutes
- **HTTPS**: Automatically enabled
- **Custom 404**: Supported

### Performance
- **CDN**: Global content delivery
- **Caching**: Automatic browser caching
- **Compression**: Gzip enabled
- **SSL**: Free SSL certificates

## 🛠️ Maintenance

### Updating Website
```bash
# Make changes to files
# Then commit and push
git add .
git commit -m "Update website content"
git push origin main
```

### Checking Deployment Status
1. **Go to repository** on GitHub
2. **Click "Actions"** tab
3. **View deployment** status
4. **Check for errors** if deployment fails

### Troubleshooting

#### Common Issues:
1. **Site not loading**: Check repository is public
2. **Images not showing**: Verify file paths are correct
3. **Styles not working**: Check CSS file is in root directory
4. **JavaScript errors**: Check browser console for errors

#### Solutions:
1. **Repository visibility**: Must be public for free GitHub Pages
2. **File paths**: Use relative paths (e.g., `./img.jpg`)
3. **Case sensitivity**: GitHub Pages is case-sensitive
4. **Caching**: Clear browser cache or wait for deployment

## 🔒 Security Considerations

### HTTPS
- **Automatic**: GitHub Pages provides free SSL
- **Required**: Modern browsers require HTTPS
- **Mixed content**: Avoid HTTP resources

### Content Security
- **No server-side code**: GitHub Pages is static hosting
- **Client-side only**: All processing happens in browser
- **API calls**: Use HTTPS endpoints only

## 📈 Analytics Setup

### Google Analytics (Optional)
1. **Create Google Analytics** account
2. **Get tracking ID** (GA4)
3. **Add to index.html**:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### GitHub Analytics
- **Traffic**: View in repository Insights
- **Clones**: Track repository activity
- **Referrers**: See where traffic comes from

## 🌍 Custom Domain Setup

### Domain Configuration
1. **Purchase domain** (e.g., from Namecheap, GoDaddy)
2. **Add CNAME record**:
   - **Type**: CNAME
   - **Name**: @
   - **Value**: `yusufbekmahmuthanov.github.io`
3. **Wait for DNS propagation** (up to 48 hours)

### SSL Certificate
- **Automatic**: GitHub provides free SSL
- **Wait time**: 24-48 hours after DNS setup
- **Verification**: Check with SSL checker tools

## 📱 Mobile Optimization

### Testing
1. **Google Mobile-Friendly Test**
2. **Lighthouse** performance audit
3. **Real device testing**
4. **Cross-browser testing**

### Performance Tips
- **Optimize images** (already done)
- **Minimize CSS/JS** (consider minification)
- **Use CDN** for external resources
- **Enable compression** (automatic on GitHub Pages)

## 🔄 Continuous Deployment

### Workflow
1. **Make changes** locally
2. **Test** in browser
3. **Commit** changes
4. **Push** to GitHub
5. **Wait** for deployment
6. **Verify** live site

### Best Practices
- **Test locally** before pushing
- **Use meaningful** commit messages
- **Check deployment** status
- **Monitor** site performance

## 📞 Support

### GitHub Pages Documentation
- **Official docs**: https://pages.github.com/
- **Help articles**: https://help.github.com/categories/github-pages-basics/
- **Community**: GitHub Discussions

### Common Commands
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Check remote
git remote -v
```

---

**Your website will be live at**: `https://yusufbekmahmuthanov.github.io/yusufbekprosmm.uz`

**Custom domain** (if configured): `https://yusufbekprosmm.uz` 