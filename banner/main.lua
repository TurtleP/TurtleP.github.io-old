function love.load()
	bg = love.graphics.newImage("spacefruit/bg.png")

	love.window.setMode(128, 128, {borderless = true})

	stars = {}
	starSizes = {}
	for k = 1, 100 do
		stars[k] = {love.math.random(128), love.math.random(128)}
		starSizes[k] = love.math.random(0.2, 1)
	end
end

function love.draw()
	for i, v in ipairs(starSizes) do
		love.graphics.setPointSize(v)
	end
	love.graphics.points(stars)
	love.graphics.draw(bg, love.graphics.getWidth() / 2 - bg:getWidth() / 2, love.graphics.getHeight() / 2 - bg:getHeight() / 2)
end

function love.keypressed(key)
	if key == "space" then
		love.event.quit()
	end
end