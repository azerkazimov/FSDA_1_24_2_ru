class GitHubUserExplorer {
    constructor() {
        this.searchInput = document.getElementById("searchInput")
        this.searchBtn = document.getElementById("searchBtn")
        this.userGrid = document.getElementById("usersGrid")
        this.loading = document.getElementById("loading")
        this.error = document.getElementById("error")

        this.initEventListeners()
        this.loadDefaultUser()
    }

    initEventListeners() {
        this.searchBtn.addEventListener("click", () => this.searchUsers())
        this.searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                this.searchUsers()
            }
        })
    }

    async loadDefaultUser() {
        const defaultUsers = [
            "octocat",
            "torvalds",
            "gaearon",
            "addyosmani",
            "sindresorhus",
            "tj",
        ]
        await this.fetchAndDisplayUsers(defaultUsers)
    }

    async searchUsers() {
        const query = this.searchInput.value.trim()
        if (!query) return
        this.showLoading()
        this.hideError()

        try {
            const response = await fetch(`https://api.github.com/search/users?q=${(query)}&per_page=12`)
            if (!response.ok) {
                throw new Error(`GitHub API Error: ${response.status}`);
            }
            const data = await response.json()
            console.log(data);

            const username = data.items.map(user => user.login)

            if (username.length === 0) {
                this.showError("No users founf. Try a different search name")
                return
            }

            await this.fetchAndDisplayUsers(username)

        } catch (error) {
            this.showError(`Error searching users: ${error.message}`)
        } finally {
            this.hideLoading()
        }
    }

    async fetchAndDisplayUsers(name) {
        this.showLoading()
        this.hideError()

        try {
            const userPromises = name.map(username => this.fetchUserData(username))

            const users = await Promise.allSettled(userPromises)

            const validUsers = users
                .filter(res => res.status === "fulfilled")
                .map(res => res.value)

            if (validUsers.length === 0) {
                this.showError("No valid users found")
                return
            }

            this.displayUsers(validUsers)
        } catch (error) {
            this.showError(`Error search users: ${error.message}`)
        } finally {
            this.hideLoading()
        }
    }

    async fetchUserData(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            if (!response.ok) {
                throw new Error(`Failed tofetch user ${username}: ${response.status}`);
            }
            const userData = await response.json()
            return userData
        } catch (error) {
            console.error(`Error fetching user ${username}:`, error);
            throw error
        }
    }

    displayUsers(users) {
        this.userGrid.innerHTML = ""

        users.forEach(user => {
            const userCard = this.createUserCard(user)
            this.userGrid.appendChild(userCard)
        })
    }

    createUserCard(user) {
        const card = document.createElement("div")
        card.className = 'user-card'

        card.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.name || user.login
            }" class="user-avatar">
                    <h3 class="user-name">${user.name || user.login}</h3>
                    <p class="user-username">@${user.login}</p>
                    <p class="user-bio">${user.bio || "No bio available"}</p>
                    <div class="user-stats">
                        <div class="stat">
                            <span class="stat-number">${this.formatNumber(
                user.followers
            )}</span>
                            <span class="stat-label">Followers</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">${this.formatNumber(
                user.following
            )}</span>
                            <span class="stat-label">Following</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">${this.formatNumber(
                user.public_repos
            )}</span>
                            <span class="stat-label">Repos</span>
                        </div>
                    </div>
                    <div class="user-links">
                        <a href="${user.html_url
            }" target="_blank" class="user-link github-link">
                            View Profile
                        </a>
                    </div>
        `
        return card
    }

    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + "M"
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K"
        }
    }

    showLoading() {
        this.loading.style.display = "block"
        this.searchBtn.disabled = true
        this.searchBtn.textContent = "Searching ..."
    }
    hideLoading() {
        this.loading.style.display = "none"
        this.searchBtn.disabled = false
        this.searchBtn.textContent = "Search"
    }
    showError(message) {
        this.error.textContent = message
        this.error.style.display = "block"

    }
    hideError() {
        this.error.style.display = "none"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new GitHubUserExplorer()
})
 